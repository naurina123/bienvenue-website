import Link from "next/link";
const Navbar = () => {
    return ( 
        <div>
            <ul className="flex ">
                <li className="mr-6">
                <Link href="/"><a className="text-black hover:text-black" >Home-1</a></Link> 
                </li>
                <li className="mr-6">
                   <Link href="/home-2"><a className="text-black hover:text-black" >Home-2</a></Link> 
                </li>
                
            </ul>
        </div>
     );
}
 
export default Navbar;