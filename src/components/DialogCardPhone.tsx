import { XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';
import imgCardPhone from '../assets/images/card-phone.png';
import visa from '../assets/images/visa.png';

const DialogCardPhone = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-[#1234]">Card</Button>
        </DialogTrigger>
        <DialogContent
          className="md:min-w-[1000px] md:h-[638px] w-[100%] h-[100%] rounded-[16px] p-[0px] border-0"
          showCloseButton={false}
        >
          <DialogHeader hidden>
            <DialogTitle hidden></DialogTitle>
            <DialogDescription hidden></DialogDescription>
          </DialogHeader>
          <div className="flex relative md:flex-row flex-col">
            <img
              src={imgCardPhone}
              className="md:absolute top-0 left-0 md:rounded-2xl rounded-t-2xl"
            />
            <DialogClose className="z-2 bg-[#F9F9F9] ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-[#333333] absolute top-14 right-12 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 p-0.5">
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="md:mt-8 mt-0 md:mb-8 mb-0 md:mr-7 mr-0 md:ml-auto ml-0 md:w-[468px] w-[100%] md:rounded-[12px] px-1 py-2 z-1 bg-white d-flex">
              <div className="h-[100%] flex">
                <div className="my-auto mx-auto flex-col">
                  <p className="font-medium text-[32px] leading-[100%] tracking-[-0.02em] text-center mb-6">
                    Provide your phone <br />
                    number so we can text you <br />
                    <span className="inline-flex items-center justify-center gap-1">
                      your{' '}
                      <span className="bg-[#65BD82] rounded-md text-white px-1.5 pb-1.5 pt-1 ml-1">
                        free $25
                      </span>
                      <img src={visa} className="h-6" alt="Visa" />
                      card.
                    </span>
                  </p>
                  <InputOTP maxLength={10}>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    {/* <InputOTPSeparator className="text-[#AAAAAA] text-xl" /> */}
                    <span className="text-[#AAAAAA] text-xl font-medium">
                      -
                    </span>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    {/* <InputOTPSeparator className="text-[#AAAAAA]" /> */}
                    <span className="text-[#AAAAAA] text-xl font-medium">
                      -
                    </span>
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                    <InputOTPSlot index={8} />
                    <InputOTPSlot index={9} />
                  </InputOTP>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default DialogCardPhone;
