import * as React from "react";

export interface DropzoneAreaProps {
    acceptedFiles?: string[];
    filesLimit?: number;
    maxFileSize?: number;
    dropzoneText?: string;
    showPreviews?: boolean;
    showPreviewsInDropzone?: boolean;
    showFileNamesInPreview?: boolean;
    showAlerts?: boolean;
    clearOnUnmount?: boolean;
    dropzoneClass?: string;
    dropzoneParagraphClass?: string;
    replaceOnFileLimitExceed?: boolean;
    onChange?: (files: any) => void;
    onDrop?: (files: any) => void;
    onDropRejected?: (files: any, evt: any) => void;
    onDelete?: (file: any) => void;
    getFileLimitExceedMessage?: (filesLimit: number) => string;
    getFileAddedMessage?: (fileName: string) => string;
    getFileRemovedMessage?: (fileName: string) => string;
    getDropRejectMessage?: (rejectedFile: any, acceptedFiles: string[], maxFileSize: number) => string;
}
export const DropzoneArea: React.ComponentType<DropzoneAreaProps>;

export interface DropzoneDialogProps {
    open: boolean
    onSave?: (files: any) => void;
    onDelete?: (file: any) => void;
    onClose?: () => void;
    onChange?: (files: any) => void;
    onDrop?: (files: any) => void;
    onDropRejected?: (files: any, evt: any) => void;
    acceptedFiles?: string[];
    filesLimit?: number;
    maxFileSize?: number;
    dropzoneText?: string;
    showPreviews?: boolean;
    showPreviewsInDropzone?: boolean;
    showAlerts?: boolean;
    clearOnUnmount?: boolean;
}
export const DropzoneDialog: React.ComponentType<DropzoneDialogProps>;
