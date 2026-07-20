const UserProfile = (props) => {

    //ADDED PROPS TO MAKE IT SO THAT I COULD PASS IN INFORMATION FOR MORE THAN ONE INDIVIDUAL.

    /*  const name = "Sarah Johnson";
     const bio = "Full-stack developer passionate about creating user-friendly applications.";
     const profileImage = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"; */

    /*  return (
         <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
             <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
             <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</h1>
             <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
         </div>
     ); */


    return (
        <div>
            <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <img src={props.profileImage} alt={`${props.name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.name}</h1>
                <p style={{ fontSize: '16px', color: '#555' }}>{props.bio}</p>
            </div>
        </div>
    );
};

export default UserProfile;