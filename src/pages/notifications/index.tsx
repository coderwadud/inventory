import ChsHead from "@/components/layouts/ChsHead";
import PrivateRoute from "@/routes/PrivetRoute";

const NotificationsPage = () => {
	return (
		<PrivateRoute>
			<ChsHead />
			<h1>notifications</h1>
		</PrivateRoute>
	);
};

export default NotificationsPage;
