import * as Yup from "yup";

const mailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/;
const maxFileSize = 5 * 1024 * 1024;
const supportedFiles = ["image/jpeg"];

export const SignUpSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Too short!")
    .max(60, "Too long!")
    .required("Name is required"),
  email : Yup
    .string()
    .matches(mailRegex, "Invalid email")
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Mail is required"),
  phone: Yup
    .string()
    .matches(phoneRegex, "Invalid phone")
    .required("Phone is required"),
  position_id: Yup
    .number()
    .required("Please, choose a position"),
  photo: Yup
    .mixed()
    .test("fileFormat", "We support only jpeg/jpg", async (file) => {
      return file && supportedFiles.includes(file.type);
    })
    .test("fileSize", "The file is too large", async (file) => {
      return file && file.size <= maxFileSize;
    })
    .test("photoSize", "Photo must be at least 70x70", async (file) => {
      return file && new Promise(async (resolve) => {
        let isLarge = true;
        const image = new Image();
  
        image.src = URL.createObjectURL(file);
  
        await image.decode();
  
        if (image.height < 70 || image.width < 70) {
          isLarge = false;
        }
  
        resolve(isLarge);
      })
    })
    .required("Please, upload your photo"),
});
