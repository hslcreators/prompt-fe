import { PDFDocument } from 'pdf-lib';
import pptx2json from 'pptx2json';

const getPptxSlideCount = async (file) => {
    try {
      const fileReader = new FileReader();
      fileReader.onload = async function() {
        const arrayBuffer = fileReader.result;
        const presentation = await pptx2json(arrayBuffer);
       return presentation.length
      };
      fileReader.readAsArrayBuffer(file);
    } catch (error) {
        throw error;
    }
};

const getPdfPageCount = async (file) => {
    try {
      const fileReader = new FileReader();
      let pageCount
      fileReader.onload = async function() {
        const pdfDoc = await PDFDocument.load(fileReader.result);
         pageCount = pdfDoc.getPageCount()
      };
      fileReader.readAsArrayBuffer(file);
       return pageCount
    } catch (error) {
        throw error;
    }
};


export { getPdfPageCount, getPptxSlideCount }
