import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Actors from "../components/admin/Actors";
import Dashboard from "../components/admin/Dashboard";
import Header from "../components/admin/Header";
import Movies from "../components/admin/Movies";
import MovieUpload from "../components/admin/MovieUpload";
import Navbar from "../components/admin/Navbar";
import NotFound from "../components/NotFound";
import ActorUpload from "../components/modals/ActorUpload";
import SearchMovie from "../components/admin/SearchMovie";

export default function AdminNavigator() {

	const [showMovieUploadModal, setShowMovieUploadModal] = useState(false)
	const [showActorUploadModal, setShowActorUploadModal] = useState(false)

	const handleMovieUploadModal = () => {
		setShowMovieUploadModal(previousState => !previousState)
	}

	const handleActorUploadModal = () => {
		setShowActorUploadModal(previousState => !previousState)
	}

	return (
		<>
			<div className="flex dark:bg-primary bg-white">
				<Navbar />
				<div className="flex-1 max-w-screen-xl">
					<Header onAddMovieClick={() => setShowMovieUploadModal(!showMovieUploadModal)}
						onAddActorClick={() => setShowActorUploadModal(!showActorUploadModal)} />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/movies" element={<Movies />} />
						<Route path="/actors" element={<Actors />} />
						<Route path="/search" element={<SearchMovie />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
			{
				showMovieUploadModal &&
				<MovieUpload onClose={handleMovieUploadModal} />
			}
			{
				showActorUploadModal &&
				<ActorUpload onClose={handleActorUploadModal} />
			}
		</>
	);
}
