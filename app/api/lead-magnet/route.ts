import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { leadMagnetCreateRequest, leadMagnetUpdateRequest } from "./schema";
import { prismadb } from "@/lib/prismadb";

// export async function POST(request: Request){
//     try{
//     //Grab our authentication state from clerk
//     // const user = await currentUser();

//     // console.log("user",user);
//     // if(!user?.id){
//     //     return NextResponse.json({message: "Unauthenticated"} , {status: 401});
//     // }

//     const userId = "user_2bueuBH9aFjQhEvfDNTNozK6f5h";

//     // Parsing and validating our data
//     const requestData = await request.json();
//     const parsed = leadMagnetCreateRequest.safeParse(requestData);

//     if(!parsed.success){
//         return NextResponse.json({message: parsed.error.message} , {status: 400});
//     }

//     const newLead  = parsed.data;

//     //Create a new lead magnet in our database using prisma
//     const newLeadMagnet = await prismadb.leadMagnet.create({
//         data: {...newLead, userId},
//     });

//     // Return the new lead magnet tot he user
//     return NextResponse.json(
//         {
//             message: "Successfully created new Lead Magnet",
//             data: newLeadMagnet,
//             succcess: true,
//         },
//         {status: 201}
//     );
//     } catch(error){
//         return NextResponse.json(
//             {
//                 message: "Successfully created Lead magnet",
//                 data: null,
//                 success: true,
//             },
//             {status: 500}
//         );
//     }
    
//     return NextResponse.json({message: "Hello World"});
// }

// export async function PUT(request: Request){
//     try{
//     //Grab our authentication state from clerk
//     // const user = await currentUser();

//     // console.log("user",user);
//     // if(!user?.id){
//     //     return NextResponse.json({message: "Unauthenticated"} , {status: 401});
//     // }

//     const userId = "user_2bueuBH9aFjQhEvfDNTNozK6f5h";

//     // Parsing and validating our data
//     const requestData = await request.json();
//     const parsed = leadMagnetUpdateRequest.safeParse(requestData);

//     if(!parsed.success){
//         return NextResponse.json({message: parsed.error.message} , {status: 400});
//     }

//     const leadMagnetToUpdate  = parsed.data;

//     if(leadMagnetToUpdate.userId !== userId){
//         return NextResponse.json({message: "Unauthorized"}, {status: 403});
//     }

//     //Create a new lead magnet in our database using prisma
//     const updatedLeadMagnet = await prismadb.leadMagnet.update({
//         where: {id: leadMagnetToUpdate.id},
//         data: leadMagnetToUpdate,
//     });

//     // Return the new lead magnet tot he user
//     return NextResponse.json(
//         {
//             message: "Successfully updated Lead Magnet",
//             data: updatedLeadMagnet,
//             succcess: true,
//         },
//         {status: 201}
//     );
//     } catch(error){
//         return NextResponse.json(
//             {
//                 message: "Successfully created Lead magnet",
//                 data: null,
//                 success: true,
//             },
//             {status: 500}
//         );
//     }
    
//     return NextResponse.json({message: "Hello World"});
// }

// 2:34:38