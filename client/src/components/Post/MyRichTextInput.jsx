import { RichTextInput, RichTextInputToolbar, LevelSelect, FormatButtons, ListButtons, LinkButtons, QuoteButtons, ClearButtons } from "ra-input-rich-text";

export const MyRichTextInput = ({ ...props }) => (
    <RichTextInput
        toolbar={
            <RichTextInputToolbar>
                <LevelSelect />
                <FormatButtons />
                <ListButtons />
                <LinkButtons />
                <QuoteButtons />
                <ClearButtons />
            </RichTextInputToolbar>
        }
        label="Текст новости"
        source="body"
        {...props}
    />
);
