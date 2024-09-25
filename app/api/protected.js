import { getSession } from 'next-auth/react';

export default async (req, res) => {
    const session = await getSession({ req });
    
    if (!session) {
        console.log('세션없음');
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    // session.user.id를 사용하여 사용자 식별
    console.log('돌긴하나요오오오오오');
    res.status(200).json({ message: `Hello, ${session.user.name}` });
  };