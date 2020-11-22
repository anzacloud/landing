import React from "react";
import { Box, Container } from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";

const accordionData = [
  {
    isExpanded: false,
    title: "What is the main focus of Anza Cloud?",
    contents: (
      <div>
        Anza Cloud is focussed on helping businesses transform to cloud
        enterprises. We provide tools that help businesses keep up with the
        rapidly changing technology.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Why the name Anza Cloud?",
    contents: (
      <div>
        Our tools are cloud based, hence the name Anza Cloud. We transform every
        business aspect to a modern cloud based solution. ✅ Data Analytics ✅
        CRM tools ✅ Web hosting ✅ Remote collaboration tools ✅ Invoicing
        Tools ✅ Billing tools ✅ Email & Marketing tools ✅ and many more...
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What businesses does Anza Cloud serve?",
    contents: (
      <div>
        Every business has different needs. At Anza Cloud, we have managed to
        find the balance for every type of business. We therefore are able to
        serve both small enterprises and multi billion establishments.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What kind of team does Anza Cloud have?",
    contents: (
      <div>
        Our team is made of young professionals equiped with necessary know how
        to help your business scale. We have witnessed steady growth since we
        launched and we look forward to having a diverse and vibrant tech
        community.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Questions"
          // heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: "900px",
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: "center",
    },
  },
};
