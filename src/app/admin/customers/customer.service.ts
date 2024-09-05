import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Customer  } from "./customer.model";


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private collectionName = 'customers';
  public data = [
    {
      id: 1,
      fullname: "John Doe",
      email: "johndoe@example.com",
      phone: "+1-555-555-1234",
      nic: "123-45-6789",
      country: "United States",
      province: "California",
      city: "Los Angeles",
      postal_code: "90001",
      street_address: "1234 Main Street"
    },
    {
      id: 2,
      fullname: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+44-20-1234-5678",
      nic: "AB123456C",
      country: "United Kingdom",
      province: "England",
      city: "London",
      postal_code: "E1 6AN",
      street_address: "56 Oxford Street"
    },
    {
      id: 3,
      fullname: "Carlos García",
      email: "carlos.garcia@example.com",
      phone: "+34-91-234-5678",
      nic: "Y1234567X",
      country: "Spain",
      province: "Madrid",
      city: "Madrid",
      postal_code: "28001",
      street_address: "Calle Gran Vía, 1"
    },
    {
      id: 4,
      fullname: "Akira Takahashi",
      email: "akira.takahashi@example.com",
      phone: "+81-3-1234-5678",
      nic: "123456789012",
      country: "Japan",
      province: "Tokyo",
      city: "Tokyo",
      postal_code: "100-0001",
      street_address: "1-1 Chiyoda"
    },
    {
      id: 5,
      fullname: "Lina Müller",
      email: "lina.mueller@example.com",
      phone: "+49-30-1234-5678",
      nic: "12345678901",
      country: "Germany",
      province: "Berlin",
      city: "Berlin",
      postal_code: "10115",
      street_address: "Unter den Linden 77"
    }
  ];


  constructor(
  ) { 



  }

  async getAllRecords() {


          // let result: any[] = []

          // const q = query(collection(this.db.db, this.collectionName),where('user_id', '==', this.db.auth.uid));
          // const querySnapshot = await getDocs(q);
          // querySnapshot.forEach((doc) => {
          //   result.push({  ...doc.data() , id: doc.id })
          // });

          // console.log(result);
          // return result

         return this.data;

  }



  async createCustomer(customer:Customer)  {
    
    // try {
      // customer.user_id = this.db.auth.uid;
      // const docRef = await addDoc(collection(this.db.db,this.collectionName),customer);
      // console.log("Document written with ID: ", docRef.id);
      // return true;
    // } catch (e) {
    //    console.error("Error adding document: ", e);
    //   //  alert("error while creating")
    //   return false;
    // }



  }

  async editCustomer(id:number): Promise<any> {

    

    let response = await this.data.find((d) => d.id == id );
    return response;

    // return false;
    // try {
      // const userDoc = doc(this.db.db,this.collectionName,id);
      // const userSnapshot = await getDoc(userDoc);
      // if (userSnapshot.exists()) {
      //   return {  ...userSnapshot.data(), id: userSnapshot.id };
      // } else {
      //   console.log("No such document!");
      //   return null;
      // }

    // } catch (e) {
    //   console.error("Error getting document: ", e);
    //   alert("Error while getting document");
    //   return null;
    // }
  }


  async deleteCustomer(docId: string) {
    // try {

      // await deleteDoc(doc(this.db.db, this.collectionName, docId));
      // return true;
 
      // console.log("Document successfully deleted!");
    // } catch (e) {
      // console.error("Error removing document: ", e);
      // alert("Error while deleting");
    // }

  }

  async update(docId: string, customer: Partial<Customer>) {

    // try {
    // return false;

        // const userDoc = doc(this.db.db, this.collectionName, docId);
        // await updateDoc(userDoc, customer);
        //  console.log("Document successfully updated!");
        // return true;

    // } catch (e) {
      
      // console.error("Error updating document: ", e);
      // alert("Error while updating");
      // return false;
    // }

  }



  
}
