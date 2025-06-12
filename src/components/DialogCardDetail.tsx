import { XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import imgCardDetail from '../assets/images/card-detail.png';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/input';
import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  addressLine1: z.string().min(1, 'Adress line 1 is required'),
  addressLine2: z.string().min(1, 'Adress line 2 is required'),
  city: z.string().min(1, 'City is required'),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format')
});

const defaultValues = {
  name: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  zipCode: ''
};

const DialogCardDetail = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues
    },
    mode: 'onTouched'
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) {
      navigate('/');
    }
  };

  return (
    <Dialog open onOpenChange={handleDialogChange}>
      <form>
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
              src={imgCardDetail}
              className="md:absolute top-0 left-0 md:rounded-2xl rounded-t-2xl"
            />
            <DialogClose className="z-2 bg-[#F9F9F9] ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-[#333333] absolute top-14 right-12 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 p-0.5">
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="md:mt-8 mt-0 md:mb-8 mb-0 md:mr-7 mr-0 md:ml-auto ml-0 md:w-[468px] w-[100%] md:rounded-[12px] px-1 py-2 z-1 bg-white d-flex">
              <div className="h-[100%] flex">
                <div className="my-auto mx-auto flex-col">
                  <p className="font-medium text-[32px] text-[#444444] leading-[100%] tracking-[-0.02em] text-center mb-6">
                    Please edit details below if incorrect.
                  </p>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col gap-4"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field, fieldState }) => (
                          <FormItem className="flex-auto">
                            <FormControl>
                              <Input {...field} {...fieldState} />
                            </FormControl>
                            <FormMessage className="place-self-start text-primary-red !m-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="addressLine1"
                        render={({ field, fieldState }) => (
                          <FormItem className="flex-auto">
                            <FormControl>
                              <Input {...field} {...fieldState} />
                            </FormControl>
                            <FormMessage className="place-self-start text-primary-red !m-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="addressLine2"
                        render={({ field, fieldState }) => (
                          <FormItem className="flex-auto">
                            <FormControl>
                              <Input {...field} {...fieldState} />
                            </FormControl>
                            <FormMessage className="place-self-start text-primary-red !m-1" />
                          </FormItem>
                        )}
                      />
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field, fieldState }) => (
                            <FormItem className="flex-auto">
                              <FormControl>
                                <Input {...field} {...fieldState} />
                              </FormControl>
                              <FormMessage className="place-self-start text-primary-red !m-1" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field, fieldState }) => (
                            <FormItem className="flex-auto">
                              <FormControl>
                                <Input {...field} {...fieldState} />
                              </FormControl>
                              <FormMessage className="place-self-start text-primary-red !m-1" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        className="h-10 rounded-md bg-[#00E1D34D] bg-gradient-to-r from-[#BDFFFF] to-[#056B62] drop-shadow-[] px-4 py-2 gap-2 text-[#FAFAFA] text-sm text-semibold "
                        type="submit"
                        onClick={form.handleSubmit((data) => {
                          onSubmit(data);
                        })}
                      >
                        Text me my $25 Visa card
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default DialogCardDetail;
