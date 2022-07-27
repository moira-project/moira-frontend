import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const router = useRouter();

	const REST_API_KEY = '7acb4bfc12bf9d810137409f749daa4d';
	const REDIRECT_URI = 'http://localhost:3000/oauth2/kakao';
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	return (
		<div className="w-full">
			<ul className=" w-1/5 mx-auto">
				<li className="bg-yellow-400 text-black py-1.5 rounded mt-2">
					<button type="button" className="w-full relative" onClick={() => Router.push(KAKAO_AUTH_URL)}>
						<div className="absolute left-3">K</div>
						<span className="text-center font-semibold">카카오 로그인</span>
					</button>
				</li>
				<li className="bg-green-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative" onClick={() => Router.push('/')}>
						<div className="absolute left-3">N</div>
						<span className="text-center font-semibold">네이버 로그인</span>
					</button>
				</li>
				<li className="bg-red-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative" onClick={() => Router.push('/')}>
						<div className="absolute left-3">G</div>
						<span className="text-center font-semibold">구글 로그인</span>
					</button>
				</li>
				<li className="bg-gray-500 text-white py-1.5 rounded  mt-2">
					<button type="button" className="w-full relative">
						<span className="text-center font-semibold">로그아웃</span>
					</button>
				</li>
			</ul>
		</div>
	);
};
export default Home;
