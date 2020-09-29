import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import SeparatorBar from '../modules/SeparatorBar'
import GalleryContent from "../modules/GalleryContent"

const PhotoGallery = () => (
    <HeaderFooterLayout activeTab="Photo Gallery">
        <SeparatorBar text="Photo Gallery"/>
        <GalleryContent />
    </HeaderFooterLayout>
)

export default PhotoGallery