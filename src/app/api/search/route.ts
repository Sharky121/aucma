import { searchPages } from '../../../data/search-data'; 

export async function POST(request: Request, response: Response) {
    const { searchTerm } = await request.json();
    const results = searchPages(searchTerm);
  
    return Response.json(results);
};