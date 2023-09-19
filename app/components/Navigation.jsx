'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {label:'МАКСПРЯДКИН', href:'/'},
    {label:'Портфолио', href:'/portfolio'},
    {label:'Опыт работы', href:'/work'},
];

export const Navigation = () => {
    const pathname = usePathname();
    
    return (
        <div>
        { navItems.map((link) => {
            const isActive = pathname === link.href;

            return (
                <Link 
                key={link.label}        
                href={link.href}
                className={ isActive ? "active" : ""}
                >
                { link.label }
                </Link>
            )
        })}
        </div>
    )
}