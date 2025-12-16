import Image from "next/image";

export default function SectionContent() {
    return (
        <div>
            <Image src={"/images/picture.png"} alt="My Profile Picture" width={300} height={300} className="rounded-full"/>
        </div>
    )
}