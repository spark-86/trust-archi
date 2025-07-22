import { Card, CardContent, Divider, Typography } from "@mui/material";
import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import { pages } from "./PageRegistry";
import MarkdownViewer from "./MarkdownViewer";

interface PageProps {
    pageName: string;
}

const PageContainer = ({ pageName }: PageProps) => {
    return (
        <>
            <Header />
            <Card sx={{ m: 4, p: 4, mx: "auto", maxWidth: 900 }}>
                <CardContent>
                    <Typography variant="body1">
                        <MarkdownViewer
                            src={
                                pages.find((page) => page.name === pageName)
                                    ?.file ?? ""
                            }
                        />
                        <Divider />
                        File:{" "}
                        {pages.find((page) => page.name === pageName)?.file}
                    </Typography>
                </CardContent>
            </Card>
            <Footer />
        </>
    );
};

export default PageContainer;
