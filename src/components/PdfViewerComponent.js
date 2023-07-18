import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
const containerRef = useRef(null);

useEffect(() => {
	const container = containerRef.current;
	let instance, PSPDFKit;


	(async function() {
		PSPDFKit = await import("pspdfkit");
		PSPDFKit.unload(container)
		
		instance = await PSPDFKit.load({
		// Container where PSPDFKit should be mounted.
		container,
		// The document to open.
		document: props.document,
		// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
		baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`
		});

		const textLines = await instance.textLinesForPageIndex(0);
		textLines.forEach((textLine, textLineIndex) => {
			console.log(`Text: ${textLine.contents}`);
			console.log(`Id: ${textLine.id}`);
		});

		// const values = instance.getFormFieldValues();
		// console.log({values})
	})();

	return () => PSPDFKit && PSPDFKit.unload(container);
}, []);

return (
	<div>
	<div ref={containerRef} style={{ width: "50%", height: "100vh"}}>
	</div>
	<div>

	</div>
	</div>
);
}