export default function useDownloadHtml({divToCapture}) {

	async function dowloadHtml() {
		const tierContainer = divToCapture;

		if (!tierContainer) {
			throw new Error("Element canvasToSave not found");
		}

		const { default: html2CanvasPro } = await import(
			"https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/+esm"
		);

		html2CanvasPro(tierContainer.current)
			.then((canvas) => {
				const ctx = document.createElement("canvas").getContext("2d");
				ctx.drawImage(canvas, 0, 0);
				const imgUrl = canvas.toDataURL("image/png");

				const downloadLink = document.createElement("a");
				downloadLink.download = tierContainer.current.textContent;
				downloadLink.href = imgUrl;
				downloadLink.click();
			})
			.catch((error) => {
				console.error("Error capturing HTML content:", error);
				// Handle errors appropriately (e.g., display an error message)
			});
	}



	return {
		dowloadHtml,
	};
}
