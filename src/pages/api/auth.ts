/* eslint-disable import/no-anonymous-default-export */
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    success: boolean;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', req.body.auth, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
            path: '/',
        }),
    );
    res.statusCode = 200;
    res.json({ success: true });
};
