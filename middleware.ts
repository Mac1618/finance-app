// Next Server
import { NextResponse } from 'next/server';

// Clerk Library
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// List of Routes
const isProtected = createRouteMatcher([
	'/',
	// '/form(.*)' - (.*) means routes under '/form/*' are all protected
]);

// Clerk Logic to protect the routes
export default clerkMiddleware((auth, request) => {
	// Check if the requested route is protected
	if (isProtected(request)) {
		auth().protect(); // protect the route
	}

	// else the user is authenticated
	return NextResponse.next();
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
