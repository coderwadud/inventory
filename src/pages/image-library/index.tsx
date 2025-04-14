import ChsHead from "@/components/layouts/ChsHead";
import PrivateRoute from "@/routes/PrivetRoute";

const ImageLibraryPage = () => {
	return (
		<PrivateRoute>
			<ChsHead />
			<h1>Image Library</h1>
		</PrivateRoute>
	);
};

export default ImageLibraryPage;
