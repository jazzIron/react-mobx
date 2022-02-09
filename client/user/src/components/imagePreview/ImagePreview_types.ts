export interface IImagePreview {
  id: string;
  defaultImage: string;
  onChange: ({ id, file }: { id: string; file: File | null }) => void;
  disabled: boolean;
}
