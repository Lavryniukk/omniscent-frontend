// Define a type named FaqObject that represents an object with two properties: 'question' and 'answer'.
type FaqObject = { question: string; answer: string };

// Define an interface named FAQProps, which describes the expected structure of props for a FAQ component.
export interface FAQProps {
  // Declare a property 'faqArray' of type 'FaqObject[]', which is an array of objects following the FaqObject type.
  faqArray: FaqObject[];
}
