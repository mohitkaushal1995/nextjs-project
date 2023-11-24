import Link from 'next/link';

export default function Users() {
  
    return (
        <div>
        <h1> The Users Page </h1>
        <ul>
           <li>
            <Link href='/user/kartik'>kartik</Link>
           </li>
        <Link href='/user/learn'>Learn</Link>
        </ul>
        </div>
    )
}