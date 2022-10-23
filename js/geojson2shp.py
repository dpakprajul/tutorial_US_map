import geopandas as gpd

gdf = gpd.read_file('C:\\Users\\binda\\Downloads\\data.geojson')
gdf.to_file('C:\\Users\\binda\\Downloads\\file.shp')