import React from 'react';
import NextLink from 'next/link';
export default function Link({ href, className, children }) {
    return (
        <NextLink href={href}>
            <a className={className}>{children}</a>
        </NextLink>
    );
}
