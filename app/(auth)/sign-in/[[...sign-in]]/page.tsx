// Next Library
import Image from 'next/image';

// Lucide React Icons
import { Loader2 } from 'lucide-react';

// Clerk Library
import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			{/* Signup Section */}
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				{/* SubHeader */}
				<div className="text-center space-y-4 pt-16">
					<h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back</h1>
					<p className="text-base text-[#7E8CA0]">
						Log in or Create Account to get back to your Dashboard
					</p>
				</div>

				{/* Clerk */}
				<div className="flex items-center justify-center mt-8">
					{/* "SIGN IN FORM" - ClerkLoaded - shows when the clerk sign-up page has LOADED */}
					<ClerkLoaded>
						<SignIn path="/sign-in" />
					</ClerkLoaded>

					{/* "LOGO" - ClerkLoading - visible when clerk sign-up page is LOADING */}
					<ClerkLoading>
						<Loader2 className="animate-spin text-muted-foreground" />
					</ClerkLoading>
				</div>
			</div>

			{/* LOGO Section */}
			<div className="h-full bg-[#0A0C0F] hidden lg:flex items-center justify-center">
				<Image src="/logo.jpg" height={300} width={300} alt="Logo-Img" />
			</div>
		</div>
	);
}
