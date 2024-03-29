import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Switch } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ContactForm() {
	const [agreed, setAgreed] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
	};

	return (
		<>
			<div className="isolate gradient_main px-5 pt-5 pb-9">
				<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
					<div
						className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>

				<div className="mx-auto max-w-2xl text-center pt-5">
					<h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">Get in touch</h2>
					<p className="mt-1 text-lg leading-8 text-gray-400">Tell us about your project</p>
				</div>

				<form onSubmit={e => handleSubmit(e)} className="mx-auto max-w-xl py-3">
					<div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
						<div>
							<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-50">
								First name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent backdrop-blur"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-50">
								Last name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent backdrop-blur"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-50">
								Company
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="company"
									id="company"
									autoComplete="organization"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent backdrop-blur"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-50">
								Email
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent backdrop-blur"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-50">
								Phone number
							</label>
							<div className="relative mt-2.5">
								<div className="absolute inset-y-0 left-0 flex items-center">
									<label htmlFor="country" className="sr-only">
										Country
									</label>
									<select
										id="country"
										name="country"
										className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									>
										<option>IN</option>
										<option>US</option>
										<option>CA</option>
										<option>EU</option>
									</select>
									{/* <BiChevronDown className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" /> */}
									{/* <ChevronDownIcon className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" /> */}
								</div>
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									autoComplete="tel"
									className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent "
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-50">
								Subject
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="subject"
									id="subject"
									autoComplete="subject"
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent backdrop-blur"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-50">
								Message
							</label>
							<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
									defaultValue={''}
								/>
							</div>
						</div>
						{/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={agreed}
								onChange={setAgreed}
								className={classNames(
									agreed ? 'bg-indigo-600' : 'bg-gray-200',
									'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								)}
							>
								<span className="sr-only">Agree to policies</span>
								<span
									aria-hidden="true"
									className={classNames(
										agreed ? 'translate-x-3.5' : 'translate-x-0',
										'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
									)}
								/>
							</Switch>
						</div>
						<Switch.Label className="text-sm leading-6 text-gray-600">
							By selecting this, you agree to our{' '}
							<a href="#" className="font-semibold text-indigo-600">
								privacy&nbsp;policy
							</a>
							.
						</Switch.Label>
					</Switch.Group> */}
					</div>
					<div className="mt-10">
						{/* The button to open modal */}
						<button
							type="submit"
							className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							<label htmlFor="my-modal-6" className="w-full">
								Let&apos;s talk
							</label>
						</button>
					</div>
				</form>

				<h4 className="text-center my-2 text-sm animate-pulse">Working hours 10AM to 6PM Mon-Fri</h4>
				<a href="mailto:info@impigo.com">
					<h4 className="text-center my-2 text-sm animate-pulse">info@impigo.com</h4>
				</a>
			</div>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle gradient_main backdrop-blur-sm">
				<div className="modal-box gradient_white backdrop-blur-xl">
					<h3 className="font-bold text-lg">Oops! Some error occured</h3>
					<p className="py-4">Please contact info@impigo.com directly instead with your queries while we work on fixing the problem</p>
					<div className="modal-action">
						<label htmlFor="my-modal-6" className="btn btn-outline hover:bg-transparent hover:scale-105 hover:text-white py-1">
							Okay
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
