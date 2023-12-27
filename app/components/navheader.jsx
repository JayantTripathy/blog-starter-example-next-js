"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.css'
import styles from './navheader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faAmbulance,
  faAnchor, faHeart
} from "@fortawesome/free-solid-svg-icons";


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "./about",
    name: "About Us",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/privacy",
    name: "Privacy",
  },
];

export default function NavHeader() {
  let pathname = usePathname() || "/";
  return (

    <div className={styles.main1}>
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <Image
              src="/next-js-logo.png"
              width={70}
              height={35}
              alt="Next Js"
            />
          </div>
          <div className="col-sm-9 mt-1">
            <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">

              {navItems.map((item, index) => {
                const isActive = item.path === pathname;

                return (

                  <Link
                    key={item.path}
                    className={`px-2 py-2 ${isActive ? "text-zinc-100" : "text-zinc-200"
                      }`} style={{ textDecoration: "none" }}
                    href={item.path}
                  >
                    <span style={{ color: "black", textDecoration: "none" }}>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="col-sm-2">

            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: 20, color: "Red" }}
            /> Jayant Tripathy
          </div>
        </div>
      </div>
    </div>
  );
}