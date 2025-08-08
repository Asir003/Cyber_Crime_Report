import React from "react";
import { Box, Grid, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ShieldIcon from '@mui/icons-material/Security';
import CrownIcon from '@mui/icons-material/EmojiEvents';

const roles = [
  {
    key: "victim",
    label: "Victim",
    description: "Report cyber crimes and track your cases",
    color: "#e6f9ed",
    icon: <PersonIcon sx={{ fontSize: 48, color: '#319795' }} />,
    features: [
      "Submit crime reports",
      "Track case progress",
      "Upload evidence",
      "Get support"
    ],
    route: "/register/victim"
  },
  {
    key: "officer",
    label: "Officer",
    description: "Investigate cases and manage evidence",
    color: "#e6f0fa",
    icon: <ShieldIcon sx={{ fontSize: 48, color: '#2563eb' }} />,
    features: [
      "Investigate assigned cases",
      "Manage evidence",
      "Update case status",
      "Add investigation logs"
    ],
    route: "/register/officer"
  },
  {
    key: "admin",
    label: "Administrator",
    description: "Manage system users and operations",
    color: "#f3eaff",
    icon: <CrownIcon sx={{ fontSize: 48, color: '#a259e6' }} />,
    features: [
      "Assign officers to cases",
      "Manage all users",
      "View system reports",
      "Monitor audit logs"
    ],
    route: "/register/admin"
  }
];

export default function RoleSelection() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <Box sx={{ width: '100%', maxWidth: 900, px: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
          <Box sx={{ background: '#e6f9ed', borderRadius: '50%', p: 2, mb: 1 }}>
            <PersonIcon sx={{ color: '#319795', fontSize: 40 }} />
          </Box>
          <Typography variant="h4" fontWeight={700} mb={1}>Choose Your Role</Typography>
          <Typography color="text.secondary" fontSize={18} mb={2}>Select the type of account you want to create</Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {roles.map(role => (
            <Grid item xs={12} md={4} key={role.key}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background: role.color,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 8 }
                }}
                onClick={() => navigate(role.route)}
              >
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  {role.icon}
                  <Typography variant="h6" fontWeight={700} mt={1} mb={0.5} color="text.primary">{role.label}</Typography>
                  <Typography color="text.secondary" align="center" mb={1}>{role.description}</Typography>
                </Box>
                <List dense>
                  {role.features.map((f, i) => (
                    <ListItem key={i} sx={{ pl: 0 }}>
                      <ListItemText primary={<Typography fontSize={15} color="text.secondary">• {f}</Typography>} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography align="center" mt={4} color="text.secondary" fontSize={17}>
          Already have an account?{' '}
          <span style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/auth/login')}>Sign in here</span>
        </Typography>
      </Box>
    </Box>
  );
} 