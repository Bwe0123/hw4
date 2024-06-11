import { IncomingForm } from 'formidable-serverless';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm({ keepExtensions: true });
  form.uploadDir = path.join(process.cwd(), 'public/uploads');

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error uploading file' });
      return;
    }

    const uploadedFiles = Object.values(files);
    if (uploadedFiles.length === 0) {
      res.status(400).json({ error: 'No files uploaded' });
      return;
    }

    // Move uploaded files to a permanent location
    const uploadedFilePaths = uploadedFiles.map(file => {
      const tempPath = file.path;
      const targetPath = path.join(form.uploadDir, file.name);
      fs.renameSync(tempPath, targetPath);
      return targetPath;
    });

    res.status(200).json({ message: 'Files uploaded successfully', files: uploadedFilePaths });
  });
};

export default upload;
