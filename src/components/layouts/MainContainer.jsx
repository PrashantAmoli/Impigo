import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';
import { MdAttachEmail } from 'react-icons/md';

export default function MainContainer({ children }) {
	return (
		<>
			<div className="navbar gradient_main backdrop-blur relative sm:fixed z-10 sm:pl-3 xl:px-11">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden px-1.5 xs:px-2.5">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</label>

						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow backdrop-blur-lg gradient_white rounded-box w-48 gap-2 font-semibold"
						>
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
										<Link href="/services" className="animate-pulse">
											Upcomming...
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
					<Link href="/" className="btn btn-ghost hover:backdrop-blur normal-case font-SpaceX text-lg sm:text-xl px-0 truncate sm:tracking-wider">
						<Image src="/ImpigoLogo.png" width={50} height={80} alt="icon" className="w-6 sm:w-7" />
						IMPIGO <span className="hidden sm:flex font-SpaceX pl-1.5">{` `}DESIGNS</span>
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex font-semibold">
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
									<Link href="/services" className="animate-pulse">
										Upcomming...
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
					<Link href="/contact" className="btn btn-ghost">
						Order
					</Link>
				</div>
			</div>

			<div className="h-16 w-full hidden sm:flex"></div>

			{children}

			<footer className="footer p-1.5 sm:p-10 gradient_main	 text-neutral-content ">
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
				<div className="p-1.5 w-full">
					<span className="footer-title">Socials</span>
					<div className="grid grid-flow-col justify-items-end px-3 max-w-xs gap-5 text-3xl w-full ">
						<Link href="mailto:info@impigo.com" className="transition-all text-red-500 hover:text-blue-500 scale-105 hover:scale-110">
							<MdAttachEmail />
						</Link>
						<Link
							href="https://instagram.com/impigo.designs?igshid=YmMyMTA2M2Y="
							className="transition-all text-red-500 hover:text-blue-500 scale-105 hover:scale-110"
						>
							<FaLinkedin />
						</Link>
						<Link
							href="https://www.linkedin.com/company/impigo-designs/"
							className="transition-all text-red-500 hover:text-blue-500 scale-105 hover:scale-110"
						>
							<RiInstagramFill />
						</Link>
						<Link href="https://twitter.com/Impig0" className="transition-all text-red-500 hover:text-blue-500 scale-105 hover:scale-110">
							<FaTwitter />
						</Link>
						<Link href="tel:+918950838069" className="transition-all text-red-500 hover:text-blue-500 scale-105 hover:scale-110">
							<RiWhatsappFill />
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
