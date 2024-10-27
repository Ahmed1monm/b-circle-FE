import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "sonner";
import {useCreateBlog} from "@/hooks/blogs/use-create-blog";
import MDEditor, {commands} from "@uiw/react-md-editor";
import { useTheme } from "@/theme-provider";

const formSchema = z.object({
    title: z.string(),
    content: z.string(),
    circleIds: z.array(z.string()) || z.null(),
});

export default function NewBlog() {
    const {theme} = useTheme();
    const {mutate} = useCreateBlog();
    const [editorContent, setEditorContent] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            circleIds: [],
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        if (data) {
            const {title, circleIds} = data;
            const blogData = {
                title,
                content: editorContent, // Store the Markdown content
                circle_ids: circleIds,
            };
            console.log(blogData);

            // mutate(blogData, {
            //   onSuccess: () => {
            //     toast.success("Blog created successfully!");
            //   },
            //   onError: (error) => {
            //     toast.error(error.message);
            //   },
            // });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="This is your blog title" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    name="tags"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                                <Input placeholder="This is your blog tags" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    name="content"
                    render={() => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <div data-color-mode={theme}>
                                    <MDEditor
                                        height={400}
                                        value={editorContent}
                                        onChange={(value) => setEditorContent(value || "")}
                                        commands={[...commands.getCommands()]}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="mt-4">Submit</Button>
            </form>
        </Form>
    );
}
