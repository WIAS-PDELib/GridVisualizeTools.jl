"""
    GridSimplex
Grid simplex with point coordinates, visible faces and regions.
"""
struct GridSimplex{D, N, Tv, Ti}
    points::SVector{N, SVector{D, Tv}}
    visibleFaces::SVector{N, Bool}
    region::Ti
end

points(s::GridSimplex) = s.points
visibleFaces(s::GridSimplex) = s.visibleFaces
region(s::GridSimplex) = s.region

function GridSimplex(::Type{Val{D}}, points::Union{Vector, Tuple}, visibleFaces::Union{Vector, Tuple}, region::Ti) where {D}
    simplexPoints = SVector{D + 1, SVector{D, Float32}}(points...)
    simplexVisibleFaces = SVector{D + 1, Bool}(visibleFaces...) 
    return GridSimplex(simplexPoints, simplexVisibleFaces, region)
end

function GridSimplex(::Type{Val{1}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti)
    @views simplexPoints = SVector{2, SVector{1, Float32}}(points[:,1], points[:,2])
    simplexVisibleFaces = SVector{2, Bool}(visibleFaces[1], visibleFaces[2])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region)
end

function GridSimplex(::Type{Val{2}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti)
    @views simplexPoints = SVector{3, SVector{2, Float32}}(points[:,1], points[:,2], points[:,3])
    simplexVisibleFaces = SVector{3, Bool}(visibleFaces[1], visibleFaces[2], visibleFaces[3])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region)
end

function GridSimplex(::Type{Val{3}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti)
    @views simplexPoints = SVector{4, SVector{3, Float32}}(points[:,1], points[:,2], points[:,3], points[:,4])
    simplexVisibleFaces = SVector{4, Bool}(visibleFaces[1], visibleFaces[2], visibleFaces[3], visibleFaces[4])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region) 
end

function GridSimplex(::Type{Val{1}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti, coordscale)
    @views simplexPoints = SVector{2, SVector{1, Float32}}(points[:,1] * coordscale, points[:,2] * coordscale)
    simplexVisibleFaces = SVector{2, Bool}(visibleFaces[1], visibleFaces[2])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region)
end

function GridSimplex(::Type{Val{2}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti, coordscale)
    @views simplexPoints = SVector{3, SVector{2, Float32}}(points[:,1] * coordscale, points[:,2] * coordscale, points[:,3] * coordscale)
    simplexVisibleFaces = SVector{3, Bool}(visibleFaces[1], visibleFaces[2], visibleFaces[3])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region)
end

function GridSimplex(::Type{Val{3}}, points::AbstractMatrix, visibleFaces::AbstractVector, region::Ti, coordscale)
    @views simplexPoints = SVector{4, SVector{3, Float32}}(points[:,1] * coordscale, points[:,2] * coordscale, points[:,3] * coordscale, points[:,4] * coordscale)
    simplexVisibleFaces = SVector{4, Bool}(visibleFaces[1], visibleFaces[2], visibleFaces[3], visibleFaces[4])
    return GridSimplex(simplexPoints, simplexVisibleFaces, region) 
end

GridEdge(points, visibleFaces, region) = GridSimplex(Val{1}, points, visibleFaces, region)
GridTriangle(points, visibleFaces, region) = GridSimplex(Val)
