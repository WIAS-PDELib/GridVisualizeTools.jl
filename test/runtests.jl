using Test, Documenter, GridVisualizeTools, ColorTypes, Colors

DocMeta.setdocmeta!(GridVisualizeTools, :DocTestSetup, :(using GridVisualizeTools, ColorTypes, Colors); recursive = true)
doctest(GridVisualizeTools)


@testset "tet_x_plane" begin
    #Testing amount of intersected edges of (x,y,z)-tetrahedron (0,0,0),(1,0,0),(1,1,0),(1,1,1) with plane x+y-1=0
    @test GridVisualizeTools.tet_x_plane!(
        [0.0 0.0 0.0 0.0 0.0 0.0; 0.0 0.0 0.0 0.0 0.0 0.0; 0.0 0.0 0.0 0.0 0.0 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0 1.0 0.0 1.0 0.0 1.0 0.0 1.0; 0.0 0.0 1.0 1.0 0.0 0.0 1.0 1.0; 0.0 0.0 0.0 0.0 1.0 1.0 1.0 1.0],
        Int32[1, 2, 4, 8],
        [-1.0, 0.0, 1.0, 1.0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        tol = 1.0e-12
    ) == 3
end


if isdefined(Docs, :undocumented_names) # >=1.11
    @testset "UndocumentedNames" begin
        @test isempty(Docs.undocumented_names(GridVisualizeTools))
    end
end
