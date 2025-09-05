// Vercel 서버리스 API 함수 - GitHub을 데이터베이스로 사용
const { Octokit } = require('@octokit/rest');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'wpstar1';
const REPO_NAME = 'freemarketing';
const DATA_PATH = 'data/promotions.json';

const octokit = new Octokit({
  auth: GITHUB_TOKEN
});

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // 데이터 조회
      const { data: fileData } = await octokit.rest.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: DATA_PATH,
      });

      const content = Buffer.from(fileData.content, 'base64').toString();
      const promotions = JSON.parse(content);
      
      return res.status(200).json({ promotions });
      
    } else if (req.method === 'POST') {
      // 새 데이터 추가
      const { promotion } = req.body;
      
      if (!promotion) {
        return res.status(400).json({ error: '홍보 데이터가 필요합니다.' });
      }
      
      // 기존 데이터 가져오기
      let currentData = [];
      let fileSha = null;
      
      try {
        const { data: fileData } = await octokit.rest.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: DATA_PATH,
        });
        
        fileSha = fileData.sha;
        const content = Buffer.from(fileData.content, 'base64').toString();
        currentData = JSON.parse(content);
      } catch (error) {
        // 파일이 없으면 새로 생성
        console.log('파일이 없어서 새로 생성합니다.');
      }
      
      // 새 데이터 추가 (맨 앞에 추가)
      currentData.unshift(promotion);
      
      // GitHub에 업데이트
      const newContent = Buffer.from(JSON.stringify(currentData, null, 2)).toString('base64');
      
      await octokit.rest.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: DATA_PATH,
        message: `새 홍보 등록: ${promotion.title}`,
        content: newContent,
        sha: fileSha, // 기존 파일이 있는 경우
      });
      
      return res.status(200).json({ success: true, message: '홍보가 성공적으로 등록되었습니다!' });
      
    } else {
      return res.status(405).json({ error: '지원하지 않는 메소드입니다.' });
    }
    
  } catch (error) {
    console.error('API 오류:', error);
    return res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      details: error.message 
    });
  }
}