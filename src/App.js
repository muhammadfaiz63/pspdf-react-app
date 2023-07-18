import PdfViewerComponent from './components/PdfViewerComponent';

function DocumentViewerComponent() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"CetakMerek4-DID2023034654.pdf"}
			/>
		</div>
	);
}

export default DocumentViewerComponent;