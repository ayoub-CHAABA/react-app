//npm install xlsx file-saver
// OutputPage.tsx
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const OutputPage = ({ data }) => {
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet([data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    // Create a Blob from the Workbook
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    // Save the Blob as a file
    saveAs(blob, 'output.xlsx');
  };

  // String to ArrayBuffer function
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  };

  return (
    <div>
      <h2>Form Submission Output</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default OutputPage;
