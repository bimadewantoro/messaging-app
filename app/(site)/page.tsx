import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div 
        className="
            flex
            min-h-full
            flex-col
            justify-center
            py-12
            sm:px-6
            lg:px-8
            bg-gray-100
        "
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            alt="Messaging"
            height="200"
            width="200"
            className="mx-auto w-auto"
            src="/images/logo.png" 
          />
          <h2
            className="
              mt-6
              text-center
              text-xl
              font-bold
              tracking-tight
              text-gray-900
            "
          >
            Secure your chats, your way. Step into Verbalize for better privacy.
          </h2>
        </div>
        <AuthForm />
      </div>
    );
  }
  