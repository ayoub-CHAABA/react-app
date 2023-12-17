// OutputPage.tsx
import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const OutputPage = ({ data }) => {
  const handleDownloadExcel = () => {
    // Assuming data is an array of objects for the Excel file
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, 'output.xlsx');
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  };

  const renderOutput = () => {
    if (Array.isArray(data) || typeof data === 'object') {
      // JSON Data Display
      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    } else {
      // For other data types, add custom rendering logic
      return <span>Unsupported data format for display.</span>;
    }
  };

  return (
    <div>
      <h2>Form Submission Output</h2>
      {renderOutput()}
      {Array.isArray(data) && (
        <button onClick={handleDownloadExcel}>Download Excel</button>
      )}
    </div>
  );
};

export default OutputPage;
