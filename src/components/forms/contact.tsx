import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui//form';
import { Button } from '@ui/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  name: z.string({ required_error: 'Veuillez spécifier votre nom' }).min(3, {
    message: 'Votre nom doit contenir au moins 3 caractères.',
  }),
  email: z
    .string({ required_error: 'Veuillez spécifier votre adresse e-mail' })
    .min(1, { message: 'Votre adresse e-mail est requise.' })
    .email({
      message: 'Adresse e-mail invalide',
    }),
  subject: z
    .string({ required_error: 'Veuillez spécifier le sujet de votre demande' })
    .min(2, {
      message: 'Votre sujet doit contenir au moins 10 caractères.',
    }),
  message: z
    .string({ required_error: 'Veuillez développer votre demande' })
    .min(50, {
      message: 'Votre sujet doit contenir au moins 50 caractères.',
    }),
});

export default function ContactForm() {
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) =>
    console.log(data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-[750px] w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-1">
              <FormLabel className="text-primary mb-2">Votre nom</FormLabel>
              <FormControl>
                <Input placeholder="Sébastien O." {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-1">
              <FormLabel className="text-primary mb-2">
                Votre address e-mail
              </FormLabel>
              <FormControl>
                <Input placeholder="sebastien.o@email.com" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="flex flex-col md:col-span-2">
              <FormLabel className="text-primary mb-2">
                Le sujet de votre message
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Création de site web, développement de plugin, etc..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col md:col-span-2">
              <FormLabel className="text-primary mb-2">Votre message</FormLabel>
              <FormControl>
                <Textarea
                  className=""
                  placeholder="Je vous contacte pour ..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitSuccessful}
          variant="secondary"
          type="submit"
          className="px-12 w-fit"
        >
          {form.formState.isSubmitSuccessful ? 'Message envoyé' : 'Envoyer'}
        </Button>
      </form>
    </Form>
  );
}
