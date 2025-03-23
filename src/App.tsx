import Banner from "./components/Banner";
import Header from "./components/Header";
import { X } from "lucide-react";
import channelImage from "../public/channel.png";
import placeHolderEmoji from "../public/placeholder-emoji.png";
import googleIcon from "../public/google-logo.png";
import Button from "./components/Button";
import CompanyTag from "./components/CompanyTag";

function App() {
  return (
    <div className="bg-background flex flex-col flex-1">
      <Header />
      <Banner>
        <div className="flex flex-1 justify-between items-center text-white text-sm">
          <p>
            <strong>Slack is your digital HQ. </strong>Meet the new features
            keeping teams connected in a work-from-anywhere world.{" "}
          </p>
          <X />
        </div>
      </Banner>
      <div className="flex items-center p-10 gap-16">
        <div className="flex flex-1 justify-center">
          <div className="flex w-full flex-col max-w-[50%]  gap-5">
            <h1 className="text-5xl font-bold">
              Slack is where the future works
            </h1>
            <p className="text-base">
              Slack is a new way to communicate with your team. It’s faster,
              better organized, and more secure than email.
            </p>
            <div className="flex gap-5">
              <Button
                variant="primary"
                className="text-xs font-lato-thin font-medium"
              >
                TRY FOR FREE
              </Button>
              <button className="text-white text-xs pr-3 bg-secondary-blue p-1 uppercase text-base flex items-center text-center gap-3">
                <div className="bg-white p-2">
                  <img src={googleIcon} className="h-4 w-auto"></img>
                </div>
                Signup with Google
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="relative size-full">
            <img
              src={channelImage}
              alt="Channel"
              className="size-8/12 rounded-lg"
            />
            <img
              src={placeHolderEmoji}
              alt="Emoji"
              className="absolute -top-5 left-24 size-10"
            />
            <img
              src={placeHolderEmoji}
              alt="Emoji"
              className="absolute bottom-20 -left-5 size-10"
            />
            <img
              src={placeHolderEmoji}
              alt="Emoji"
              className="absolute bottom-24 left-96 size-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 mx-60 gap-10">
        {Array.from({ length: 12 }).map((_, index) => (
          <CompanyTag key={index} />
        ))}
      </div>
      {/* Embed video here */}
      <div className="flex items-center p-10 gap-16">
        <div className="flex flex-1 justify-end mx-10">
          <video
            className="size-8/12 rounded-lg"
            controls
            poster="./cream-thumbnail.avif"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex w-full flex-col gap-5">
            <h1 className="text-3xl font-bold">
              Now is your moment to build <br/> a better tomorrow
            </h1>
            <p className="text-base">
              We've seen what the future can be. Now it's time to decide what
              it will be.
            </p>
            <div className="flex gap-5">
              <Button
                variant="secondary"
                className="text-base font-lato-thin font-medium"
              >
                WATCH VIDEO
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
