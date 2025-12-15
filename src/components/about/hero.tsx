import Image from "next/image";

export default function HeroContent() {
    return (
        <Image
            src="/images/main.png"
            alt="Profile Picture"
            width={300}
            height={300}
        />
    )
}