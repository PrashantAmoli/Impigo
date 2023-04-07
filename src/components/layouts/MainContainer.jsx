import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

export default function MainContainer({ children }) {
	return (
		<>
			<div className="navbar gradient_main backdrop-blur relative sm:fixed z-10">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-lg gradient_white rounded-box w-48 gap-2">
							<li>
								<Link href="/" className="">
									Home
								</Link>
							</li>
							<li>
								<Link href="/gallery" className="">
									Gallery
								</Link>
							</li>
							<li tabIndex={0}>
								<a className="justify-between">
									Services
									<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
									</svg>
								</a>
								<ul className="p-2 backdrop-blur-2xl gradient_white">
									<li>
										<Link href="/services" className="">
											3D Models
										</Link>
									</li>
									<li>
										<Link href="/services" className="">
											Shopify Integration
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/about" className="">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/contact" className="">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<Link href="/" className="btn btn-ghost hover:backdrop-blur normal-case text-xl">
						Impigo Design&apos;s
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link href="/" className="">
								Home
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="">
								Gallery
							</Link>
						</li>
						<li tabIndex={0}>
							<Link href="/" className="">
								Services
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</Link>
							<ul className="p-2 backdrop-blur-2xl gradient_white ">
								<li>
									<Link href="/services" className="">
										3D Models
									</Link>
								</li>
								<li>
									<Link href="/services" className="">
										Shopify
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/about" className="">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/contact" className="">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div className="navbar-end">
					<Link href="/" className="btn btn-ghost">
						Order
					</Link>
				</div>
			</div>

			{children}

			<footer className="footer p-5 sm:p-10 gradient_main	 text-neutral-content">
				<div className="flex justify-center md:flex-row md:gap-10 items-center md:pl-10">
					<Image src="/ImpigoLogo.png" alt="logo" width={88} height={150} className="" />
					<p>
						Impigo Design&apos;s Pvt. Ltd.
						<br />
						Adding Creativity to your Triumph
						<br />
						Copyright © 2023 - All right reserved
					</p>
				</div>
				<div>
					<span className="footer-title">Social</span>
					<div className="grid grid-flow-col gap-4 text-3xl">
						<Link href="/">
							<FaTwitter />
						</Link>
						<Link href="/">
							<FaLinkedin />
						</Link>
						<Link href="/">
							<RiInstagramFill />
						</Link>
						<Link href="/">
							<RiWhatsappFill />
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
