import React from 'react';import{NavLink,Link}from'react-router-dom';
export function Page({title,children}:{title:string;children:React.ReactNode}){return <main className="page"><h1>{title}</h1>{children}<p className="notice">AIの解説には誤りが含まれる可能性があります。重要な問題は、教科書、解答、先生の説明も確認してください。</p></main>}
export const Button=({children,onClick,type='button',className=''}:{children:React.ReactNode;onClick?:()=>void;type?:'button'|'submit';className?:string})=><button type={type} onClick={onClick} className={'btn '+className}>{children}</button>;
export const Card=({children,className=''}:{children:React.ReactNode;className?:string})=><section className={'card '+className}>{children}</section>;
export const Badge=({children}:{children:React.ReactNode})=><span className="badge">{children}</span>;
export function Header(){return <header className="header"><Link to="/" className="logo">解きナビAI</Link><Link to="/settings" aria-label="設定">⚙️</Link></header>}
export function Nav(){const items=[['/','ホーム','🏠'],['/input','質問する','✍️'],['/review','復習','📒'],['/analytics','学習記録','📊'],['/settings','設定','⚙️']];return <nav className="bottom">{items.map(([to,l,i])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}>{i}<span>{l}</span></NavLink>)}</nav>}
export function MathText({text}:{text:string}){return <span className="math">{text}</span>}
export function Loading(){return <Card><div className="spinner"/>AIが読み取っています…</Card>}
export function Empty({text}:{text:string}){return <Card><b>まだデータがありません</b><p>{text}</p></Card>}
