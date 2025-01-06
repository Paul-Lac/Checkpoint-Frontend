import { useAddCountryMutation } from "@/graphql/generated/schema";
import { Box, Button, FormLabel, Input } from "@mui/material";
import { useForm } from "react-hook-form";

interface AddCountryFormData {
  name: string;
  emoji: string;
  code: string;
}

export function Form() {
  const [addCountry, { loading, data, error }] = useAddCountryMutation();

  const { register, handleSubmit } = useForm<AddCountryFormData>();

  async function onFormSubmitted(formData: AddCountryFormData) {
    await addCountry({
      variables: {
        name: formData.name,
        emoji: formData.emoji,
        code: formData.code,
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(onFormSubmitted)}>
      <Box
        sx={{
          margin: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            type="text"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 50,
                message: "Name must not exceed 50 characters",
              },
            })}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="emoji">Emoji</FormLabel>
          <Input
            type="text"
            {...register("emoji", {
              required: "Emoji is required",
              maxLength: {
                value: 4,
                message: "Emoji must not exceed 4 characters",
              },
            })}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="code">Code</FormLabel>
          <Input
            type="text"
            {...register("code", {
              required: "Code is required",
              maxLength: {
                value: 3,
                message: "Code must not exceed 3 characters",
              },
            })}
          />
        </Box>
        <Button type="submit">Add</Button>
      </Box>
    </form>
  );
}
