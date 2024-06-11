// Clerk Library
import { UserButton } from '@clerk/nextjs';

// Shadcn UI Components
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div>
			<p>This is an authenticated route!</p>
			{/* Go back to '/' or home page when signout */}
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
