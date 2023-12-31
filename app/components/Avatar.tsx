'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
          src="/images/avatar.png"
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
  )
}

export default Avatar